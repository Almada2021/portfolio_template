import socialNetwork from "./img/socialNetwork.JPG";
import twitterClone from "./img/twitterCloneScreenShoot.JPG";
import ecommerce from "./img/ecommerce.JPG";
const textSocialNetwork = `
Is a simple layout template of a Social Network, 
you can see the post menu in Pc and other interface
with this proyect, I learned  Material UI in the year 2020
because is the first project using the Material framework
from google.
I learned a lot of things with this project for example theme
providers in MUI are a very intersting topic, How you can use this for return different ccs?, 
is very easy to use MUI and also is a great tool
`;

const textTwitterClone = `
A real clone of twitter in this project I used NextJS, Prisma as ORM, mongodb as database and another technologies like: react-hot-toast,
next-auth, tailwindcss and react-icons The project is really easy to do with NextJS 'The React Framework', I thought that is the best way to do your ideas be quickly one project
 
`;
const textEcommerce = `
This is a project made to try to create the functionality of a shopping cart in React with tailwind and useContext, I was creating this because at work we started to make an ecommerce in React and we needed to experiment with certain features like useContext as it is lighter than other alternatives like redux or zustand.
`;
export const listProyect = [
    {
        title: "Social Network Template",
        description: textSocialNetwork,
        img: socialNetwork,
        deploy: "https://stunning-kitten-bc730d.netlify.app/#dark",
        github: "https://github.com/Almada2021/MUI-Project"
    },
    {
        title: "TwitterClone",
        description: textTwitterClone,
        img: twitterClone,
        deploy: "https://stunning-kitten-bc730d.netlify.app/#dark",
        github: "https://github.com/Almada2021/MUI-Project"
    },
    {
        title: "Cart of Ecommerce",
        description: textEcommerce,
        img: ecommerce,
        deploy: "https://stunning-kitten-bc730d.netlify.app/#dark",
        github: "https://github.com/Almada2021/MUI-Project"
    }
]