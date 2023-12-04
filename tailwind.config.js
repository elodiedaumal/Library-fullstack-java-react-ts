/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{js,jsx,ts,tsx}"],
   theme: {
      extend: {
         backgroundImage: {
            "review-left": "url('./Images/PublicImages/image-4.jpg')",
            "review-right": "url('./Images/PublicImages/image-1.jpg')",
            lost: "url('./Images/PublicImages/image-3.jpg')",
         },
      },
   },
   plugins: [],
};
