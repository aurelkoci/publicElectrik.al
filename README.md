# Elektrikal

## Setup

### GitHub Pages deployment

Before the `deploy` GitHub Actions job can succeed, you must enable GitHub Pages for this repository:

1. Go to **Settings → Pages** in this repository.
2. Under **"Build and deployment"** → **"Source"**, select **"GitHub Actions"**.
3. Save.

Once enabled, every push to `main` will automatically build and deploy the site via the `deploy.yml` workflow.
