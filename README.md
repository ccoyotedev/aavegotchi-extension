> This project aims to provide a simple chrome extenstion that allows you to view and pet your Aavegotchis.

To view project:

- Clone to local folder
- cd to project and npm install
- npm run build
- Go to Chrome Extensions
- Toggle developer mode -> Click Load unpacked
- Locate and select build file within the project

## 🎉 Features

- **View Gotchi**
- **View Gotchi Details** for injected content
- **See time unti interaction**
- **Pet Gotchi**


## 📝 Description

It's built using React and uses web3 + Metamask to connect to the Aavegotchi contract.

## 📝 Notes

Currently not possible to connect Metamask to the webpage within the popup. Instead one must load a page already connected to Metamask or connect Metamask to the current page and refresh.

Once contract is connected, the gotchis data is stored in Chromes storage.

---

# Todo

- Enable pet only if connected to the Matic Network
- Find way to connect webpage to Metamask directly from extension
- Add browser compatibility for firefox
- Add browser compatibility for brave
- Add proper error handling with error codes

## Env improvements

- Replace with Typescript
- Repace web3 with Ether


---

Initial project was branched off of https://github.com/ElForastero/react-browser-extension-boilerplate
