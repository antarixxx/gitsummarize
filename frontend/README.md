# 🧠 GitSummarize

<img width="1293" alt="Image" src="https://github.com/user-attachments/assets/c4469d82-fac1-4a47-82a5-00a8efe223c4" />

<div align="center">
  
## **Generate beautiful, world-class documentation from any GitHub repository — instantly.**  

Just replace `hub` with `summarize` in any GitHub URL to generate a live, interactive documentation hub.
</div>

---

## 🚀 Features

GitSummarize analyzes any GitHub repo (public or private) and generates:

- 📄 **System-level architecture overviews**
- 📁 **Per-directory and file summaries**
- 🧠 **Natural language descriptions of purpose, flow, and structure**
- 🔗 **Business Logic and Rules Extraction**
- 📊 **Architecture diagrams and flows**

It’s perfect for onboarding, exploring unfamiliar codebases, and writing technical documentation — all powered by Gemini.

---

## 🧰 Tech Stack

| Area       | Stack |
|------------|-------|
| **Frontend** | Next.js, TypeScript, Tailwind CSS, ShadCN |
| **Backend**  | FastAPI, Python, Server Actions |
| **Database** | PostgreSQL (Supabase) |
| **AI**       | Gemini 2.5 Pro |
| **Analytics**| PostHog |
| **Hosting**  | Vercel (Frontend), Render (Backend) |

---

## 🤔 Why GitSummarize?

We wanted to contribute to open-source projects but found it difficult to understand massive codebases quickly.  

GitSummarize automates the hardest part: figuring out *what the code does* and *how it's structured* — giving you useful documentation and high level overview of the codebase.

---

## 🧪 Local Development / Self-Hosting

1. **Clone the repo**
   ```bash
   git clone https://github.com/antarixxx/gitsummarize
   cd gitsummarize
   ```

2. Create a new `.env` file and copy the contents of `.env.template` to it. Fill values

3. **Run the Next.js Project**
    ```bash
    npm run dev
    ```

    You can now access the website at `localhost:3000`.


## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Acknowledgements

Shoutout to [GitIngest](https://gitingest.com/) and [GitDiagram](https://gitdiagram.com/) for the inspiration and styling.

## 📈 Rate Limits

We are currently hosting it for free with rate limits though this is somewhat likely to change in the future based on Gemini's API policies.

<!-- If you would like to bypass these, self-hosting instructions are provided. I also plan on adding an input for your own Anthropic API key.

Diagram generation:

- 1 request per minute
- 5 requests per day -->

## 🤔 Future Steps

- Expand documentation to cover more topics (Setup, Onboarding Guide)
- Add Architecture Diagrams
