import brave from "../public/images/brave.jpg";
import Image from "next/image";

export function Troubleshoot() {
  return (
    <section>
      <h2 id="troubleshoot">Troubleshoot issues</h2>
      <h3 id="brave-issue">How to make it work on Brave browser</h3>
      If you are using Brave browser, follow these steps to make it work:
      <ul>
        <li>
          Go to{" "}
          <a target={"_blank"} href="brave://settings/shields">
            brave://settings/shields
          </a>
        </li>
        <li>
          Disable{" "}
          <span className="italic font-semibold">
            Prevent sites from fingerprinting me based on my language
            preferences
          </span>
          <Image
            src={brave}
            width={600}
            alt="Brave troubleshoot"
            placeholder="blur"
          />
        </li>
      </ul>
    </section>
  );
}
