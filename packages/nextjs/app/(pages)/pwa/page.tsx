"use client";

import { useState } from "react";
import { sendNotification } from "../../actions/notification";
import { urlB64ToUint8Array } from "~~/utils/scaffold-eth/utils";

const page = () => {
  const [notificationPermission, setNotificationPermission] = useState<"granted" | "denied" | "default">("granted");

 const onClick =  () => {
    console.log("Click");
    // const registration = await navigator.serviceWorker.ready;
    // const subscription = await registration.pushManager.getSubscription();
  
    // if (subscription) {
    //   const unsubscribed = await subscription.unsubscribe();
    //   if (unsubscribed) {
    //     console.log("Old subscription removed successfully.");
    //   } else {
    //     console.error("Failed to unsubscribe from push notifications.");
    //   }
    // } else {
    //   console.log("No existing subscription found.");
    // }
    Notification.requestPermission().then(permission => {
      setNotificationPermission(permission);
      if (permission === "granted") {
        subscribeUser();
      } else {
        console.log("Please go to setting and enable noitificatoin.");
      }
    });
  };

  async function subscribeUser() {
    if ("serviceWorker" in navigator) {
      try {
        // Check if service worker is already registered
        const registration = await navigator.serviceWorker.getRegistration();
        if (registration) {
          generateSubscribeEndPoint(registration);
          console.log("Registration complete at first");
        } else {
          // Register the service worker
          const newRegistration = await navigator.serviceWorker.register("/sw.js");
          console.log("Registration complete at second");
          // Subscribe to push notifications
          generateSubscribeEndPoint(newRegistration);
        }
      } catch (error) {
        console.log("Error during service worker registration or subscription:");
      }
    } else {
      console.log("Service workers are not supported in this browser");
    }
  }

  const generateSubscribeEndPoint = async (newRegistration: ServiceWorkerRegistration) => {
    // const applicationServerKey = urlB64ToUint8Array(process.env.NEXT_PUBLIC_VAPID_KEY!);
    const applicationServerKey = urlB64ToUint8Array(
      "BIfP5Hsw1ethRtdN4dUhjqSLk1tSld0ALn7-kkSkvtco0_yti2Vro7a_Ek3W7MfFli7ydEAm8AAeO6no65SEPFc",
    );
    console.log("B64");
    const options = {
      applicationServerKey,
      userVisibleOnly: true, // This ensures the delivery of notifications that are visible to the user, eliminating silent notifications. (Mandatory in Chrome, and optional in Firefox)
    };
    const subscription = await newRegistration.pushManager.subscribe(options);
    console.log(subscription);
    
    sendNotification("This is a message", "Po Hui")
    // const supabase = createSupabaseBrowser();

    // const { error } = await supabase.from("notification").insert({ notification_json: JSON.stringify(subscription) });

    // if (error) {
    //   toast.error(error.message);
    // } else {
    //   queryClient.invalidateQueries({ queryKey: ["user"] });
    // }
  };

  return (
    <div>
      <button className="btn btn-primary btn-sm" onClick={onClick} type="button">
        Connect Wallet
      </button>
    </div>
  );
};

export default page;
