"use server";

import { createSupabaseServer } from "../../lib/sever";
import webpush from "web-push";

export const sendNotification = async (message: string, username: string) => {
  const vapidKeys = {
    publicKey: "BIfP5Hsw1ethRtdN4dUhjqSLk1tSld0ALn7-kkSkvtco0_yti2Vro7a_Ek3W7MfFli7ydEAm8AAeO6no65SEPFc"!,
    privateKey: "S8naCbXLzrhcjNswakxvwJ6OGp7-LrhFHwa6dnRIDKQ"!,
  };
  //setting our previously generated VAPID keys
  webpush.setVapidDetails("mailto:phxx04@email.com", vapidKeys.publicKey, vapidKeys.privateKey);
  console.log("webpush successfuilly")

  // const supabase = createSupabaseServer();

  // const { data, error } = await supabase.from("notification").select("*").eq("username", username).single();
  // if (error) {
  //   return JSON.stringify({ error: error.message });
  // } else if (data) {
  //   try {
  //     await webpush.sendNotification(
  //       JSON.parse(data.notification_json),
  //       JSON.stringify({
  //         message: username,
  //         body: message,
  //       }),
  //     );
  //     return "{}";
  //   } catch (e) {
  //     return JSON.stringify({ error: "failed to send notification" });
  //   }
  // }
  return "{}";
};
