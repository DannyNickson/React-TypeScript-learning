import React from "react";
import Card, { CardVariant } from "./components/Card";
import { useState } from "react";
import Userlist from "./components/Userlist";
import { IUser } from "./types/types";

function App() {
  const [variant, setVariant] = useState(CardVariant.primary);
  const users: IUser[] = [
    {
      id: 1,
      name: "Leanne Graham",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        city: "Gwenborough",
        zipcode: "92998-3874",
      },
    },
    {
      id: 2,
      name: "Ervin Howell",
      email: "Shanna@melissa.tv",
      address: {
        street: "Victor Plains",
        city: "Wisokyburgh",
        zipcode: "90566-7771",
      },
    },
  ];
  return (
    <div>
      <Card
        onClick={(num) => {
          console.log("click", num);
        }}
        variant={variant}
        width="200px"
        height="200px"
      >
        <button
          onClick={() => {
            setVariant(
              variant === CardVariant.primary
                ? CardVariant.outlined
                : CardVariant.primary
            );
          }}
        >
          Кнопка
        </button>
      </Card>
      <Userlist users={users}></Userlist>
    </div>
  );
}

export default App;
