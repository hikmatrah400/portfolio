import connectDB, { nextCatchMethod, nextRespoonseMethod } from "@/lib";
import { ContactModel } from "@/models";

export const GET = async () => {
  try {
    await connectDB();
    const data = await ContactModel.find({});

    return nextRespoonseMethod(data);
  } catch (err) {
    return nextCatchMethod(err);
  }
};

export const POST = async (req: Request) => {
  try {
    await connectDB();
    const body = await req.json();
    const user = new ContactModel(body);
    await user.save();

    return nextRespoonseMethod({
      message: "Message sent successfully.",
      user: user,
    });
  } catch (err) {
    return nextCatchMethod(err);
  }
};
