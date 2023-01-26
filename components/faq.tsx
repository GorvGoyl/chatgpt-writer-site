/* eslint-disable react/no-unescaped-entities */
export function Faq() {
  return (
    <section>
      <h2 id="faq">Frequently asked questions</h2>
      <div className="space-y-3">
        <details className="">
          <summary className="font-medium hover:text-slate-700" role="button">
            Is it really 100% free?
          </summary>
          Yes
        </details>
        <details className="">
          <summary className="font-medium hover:text-slate-700" role="button">
            What is ChatGPT?
          </summary>
          Chat GPT is a computer program that can understand and generate
          natural language text. It uses a neural network, a type of machine
          learning model, to generate text based on the patterns it has learned
          from the large amount of text data it was trained on. This allows it
          to respond to prompts and generate text in a way that resembles human
          writing.
        </details>
        <details className="">
          <summary className="font-medium hover:text-slate-700" role="button">
            Which all websites does it support?
          </summary>
          It works on all sites. Just click the extension icon to open popup
          window. <br /> If you are on Gmail, launch the extension from the icon
          in Gmail text editor to get even better user experience.
        </details>
        <details className="">
          <summary className="font-medium hover:text-slate-700" role="button">
            Which data is shared with the AI model?
          </summary>
          When writing a new email, the data sent is the user prompt. When
          replying to an email, the data sent is the previous email text content
          (which can be edited to remove sensitive information) and the user
          prompt.
        </details>
        <details className="">
          <summary className="font-medium hover:text-slate-700" role="button">
            Which all languages does it support?
          </summary>
          All popular languages. Just mention the language in the text prompt.
          For example: "Write an email in German language about internship
          opportunity."
        </details>
      </div>
    </section>
  );
}
