"use client";

import { useCallback, useMemo, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CheckBox from "@mui/material/Checkbox";
import ContainedButton from "../components/ContainedButton";
import { contactGridContainerStyles } from "../styles";
import { CountryInput, PhoneInputAdorment } from "../components";
import { transformTextToNumber } from "../Functions";
import CardUI from "@/UI/material/CardUI";
import InputField from "@/UI/material/InputField";
import { inputFocusedFilledLabelStyles } from "@/UI/material";
import axios from "axios";
import { Modal } from "@/UI/ModalDialog";
import { CardMedia } from "@mui/material";

const ContactForm = () => {
  const inputGridSize = useMemo(() => ({ xs: 12, sm: 6 }), []);

  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [inputData, setInputData] =
    useState<ContactInputData>(defaultInputData);
  const { fullName, email, phone, phoneCode, country, city, address, message } =
    inputData;

  const changeInputs = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, type, value } = e.target;

      setInputData((prev) => ({
        ...prev,
        [name]: type === "number" ? (value !== "" ? Number(value) : "") : value,
      }));
    },
    []
  );
  const checkChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) =>
      setChecked(event.target.checked),
    []
  );

  const handlePhone = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.target.value.length < 12) {
      setInputData((prev) => ({
        ...prev,
        phone: transformTextToNumber({
          value: e.target.value,
          addChar: " ",
        }),
      }));
    }
  };

  const renderInputProps = useCallback(
    (name: string, value: string | number) => ({
      name,
      value,
    }),
    []
  );

  const clearInputData = useCallback(() => {
    setInputData(defaultInputData);
    setChecked(false);
  }, []);

  const submitContactForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (phone.length !== 11) {
      setPhoneError(true);
      return false;
    } else {
      setPhoneError(false);
      setLoading(true);
      axios
        .post("/api/contact", {
          ...inputData,
          interested: checked ? "Yes" : "No",
        })
        .then(() => {
          Modal.success("Success", "Message sent successfully!");
          setInputData(defaultInputData);
          setChecked(false);
        })
        .catch((err) => {
          Modal.error("Failed", err.response.data.error.errorResponse.errmsg);
          console.log(err);
        })
        .finally(() => setLoading(false));
      return true;
    }
  };

  const btnDisabled = !(
    Object.values(inputData).filter((elm) => elm !== "").length > 0
  );

  return (
    <Stack rowGap={"2.5rem"}>
      <Typography variant="h1" textAlign="center" className="headerTitle">
        Contact Us
      </Typography>

      <Grid
        container
        columns={12}
        columnSpacing="1rem"
        sx={contactGridContainerStyles}
      >
        <CardUI size={{ xs: 12, sm: 6, md: 3.8 }} className="leftContainer">
          <Box className="imgContainer">
            <CardMedia
              component="img"
              image="/media/contactGif.gif"
              sx={{ width: 100, height: 100 }}
              alt="celebration"
              loading="lazy"
            />
          </Box>
          <Box sx={{ width: "100%" }}>
            <Typography className="title" variant="h4">
              Create a Project or want us to Collaborate.
            </Typography>
            <Typography className="content" component="p">
              If you need a project or want us for collaboration just send us a
              message from here.
            </Typography>
          </Box>
        </CardUI>

        <CardUI
          className="rightContainer"
          size={{ xs: 12, md: 8 }}
          loading={loading}
        >
          <form onSubmit={(e) => submitContactForm(e)}>
            <Grid container size={12} spacing={"1.5rem"}>
              <InputField
                gridSize={inputGridSize}
                label="Full name"
                {...renderInputProps("fullName", fullName)}
                onChange={changeInputs}
              />
              <InputField
                gridSize={inputGridSize}
                label="Email address"
                type="email"
                {...renderInputProps("email", email)}
                onChange={changeInputs}
              />

              {useMemo(
                () => (
                  <CountryInput
                    value={country}
                    onChange={(e, value) => {
                      const splitValue = value?.split(" (");
                      console.log(splitValue);
                      setInputData((prev) => ({
                        ...prev,
                        country: splitValue ? splitValue[0] : "",
                        phoneCode: splitValue ? splitValue[1]?.slice(3) : "",
                      }));
                    }}
                  />
                ),
                [country]
              )}

              {useMemo(
                () => (
                  <InputField
                    gridSize={inputGridSize}
                    label="Phone number"
                    disabled={!country}
                    {...renderInputProps("phone", phone)}
                    onChange={handlePhone}
                    helperText={
                      phoneError ? "Phone must be at equal 9 characters." : ""
                    }
                    error={phoneError}
                    slotProps={
                      country
                        ? {
                            inputLabel: {
                              style: inputFocusedFilledLabelStyles,
                            },
                            input: {
                              startAdornment: (
                                <PhoneInputAdorment phoneCode={phoneCode} />
                              ),
                            },
                          }
                        : {}
                    }
                  />
                ),
                [phoneCode, country, phone, phoneError]
              )}

              <InputField
                gridSize={inputGridSize}
                label="City"
                {...renderInputProps("city", city)}
                onChange={changeInputs}
              />
              <InputField
                gridSize={inputGridSize}
                label="Address"
                {...renderInputProps("address", address)}
                onChange={changeInputs}
              />
              <InputField
                gridSize={12}
                multiline
                rows={3}
                label="Message"
                {...renderInputProps("message", message)}
                onChange={changeInputs}
              />

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  pl: "0.2rem",
                }}
              >
                <FormControlLabel
                  label="Are you interested about our portfolio design?"
                  className="checkBoxControl"
                  control={
                    <CheckBox
                      checked={checked}
                      onChange={checkChange}
                      style={{ width: "max-content" }}
                    />
                  }
                />
              </Box>

              <Stack className="contactActionsBox">
                <ContainedButton
                  sx={{ width: { xs: "50%", md: "auto" }, px: "1.2rem" }}
                  buttonStyle="btnOutlined"
                  onClick={clearInputData}
                  disabled={btnDisabled}
                >
                  Clear
                </ContainedButton>

                <ContainedButton
                  type="submit"
                  sx={{ width: { xs: "50%", md: "auto" }, px: "1.2rem" }}
                >
                  Submit
                </ContainedButton>
              </Stack>
            </Grid>
          </form>
        </CardUI>
      </Grid>
    </Stack>
  );
};

export const defaultInputData = {
  fullName: "",
  email: "",
  country: "",
  phone: "",
  phoneCode: "",
  city: "",
  address: "",
  message: "",
  interested: "",
};

export type ContactInputData = {
  fullName: string;
  email: string;
  country: string;
  phone: string;
  phoneCode: string;
  city: string;
  address: string;
  message: string;
  interested: string;
};

export default ContactForm;
