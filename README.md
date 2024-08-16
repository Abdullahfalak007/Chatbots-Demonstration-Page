# Customer Advocate Assistant - Local Setup Guide

## Prerequisites

Before setting up the project, ensure you have the following installed on your machine:

- [pnpm](https://pnpm.io/installation)

## Setup Instructions

1. **Clone the Repository**

   ```sh
   git clone git@gitlab.com:cybergen-ai/customeradvocateassistant/frontend.git
   cd frontend
   ```
## Install Dependancy

1. **Ensure you are using `pnpm` package manager, then install the project dependencies:** 
    ```sh
    pnpm install
    ```

## Environment Variables

1. **Copy the ```.env.example``` file to ```.env```**
    ```sh
    cp .env.example .env
    ```

## Install JSON Server Globally

1. **Ensure `json-server` is installed globally**

    ```sh
    npm install -g json-server
    ```

2. **Serve the `db.json` file using `json-server` on port `3000`**

    ```sh
    json-server --watch db.json --port 3000
    ```