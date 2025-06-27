import connectDB, { nextCatchMethod, nextRespoonseMethod } from "@/lib";
import { ContactModel } from "@/models";

// export const PATCH = async (
//   req: Request,
//   { params }: { params: { id: string } }
// ) => {
//   try {
//     await connectDB();
//     const body = await req.json();

//     const user = await ContactModel.findByIdAndUpdate(params.id, body, {
//       new: true,
//     });
//     if (!user) return nextRespoonseMethod({ error: "User not found" }, 404);
//     return nextRespoonseMethod({
//       message: "User Updated Successfully",
//       user,
//     });
//   } catch (err) {
//     return nextCatchMethod(err);
//   }
// };

// export const DELETE = async (
//   req: Request,
//   { params }: { params: { id: string } }
// ) => {
//   try {
//     await connectDB();
//     const deleted = await ContactModel.findByIdAndDelete(params.id);

//     if (!deleted) return nextRespoonseMethod({ error: "User not found" }, 404);
//     return nextRespoonseMethod({
//       message: "User Deleted Successfully",
//       deleted,
//     });
//   } catch (err) {
//     return nextCatchMethod(err);
//   }
// };
