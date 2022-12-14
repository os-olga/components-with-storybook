import React, { useState } from "react";
import { Avatar } from "components/Avatar";
import { Badge, BadgeTypeEnum } from "components/Badge";
import { Card } from "components/Card";
import { Checkbox } from "components/Checkbox";
import { Input } from "components/Input";
import { RadioButton } from "components/RadioButton";
import { Toggle } from "components/Toggle";
import { Typography, TypographyTypeEnum } from "components/Typography";
import { camerasCard } from "mock";

import "./App.css";

function App() {
  const [selectedRadio, setSelectedRadio] = useState<String>();
  const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRadio(event.target.value);
  };

  // CHECKBOX
  const [checkboxA, setCheckboxA] = useState(false);
  const [checkboxB, setCheckboxB] = useState(false);

  const handleChangeA = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckboxA(e.target.checked);
  };
  const handleChangeB = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckboxB(e.target.checked);
  };

  // TOGGLE

  const [toggle, setToggle] = useState(false);
  const handleChangeToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToggle(e.target.checked);
  };

  const [password, setPassword] = useState("");
  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  return (
    <div className="App">
      <Typography variant={TypographyTypeEnum.h1}>Avatars</Typography>
      <div style={{ display: "flex" }}>
        <div>
          <Avatar firstname="Olha" lastname="Shcherbakova" size="sm" />
          <Avatar firstname="Olha" lastname="Shcherbakova" size="md" />
          <Avatar firstname="Olha" lastname="Shcherbakova" size="lg" />
        </div>
        <div>
          <Avatar
            firstname="Olha"
            lastname="Shcherbakova"
            image="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80"
            size="sm"
          />
          <Avatar
            firstname="Olha"
            lastname="Shcherbakova"
            image="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
            size="md"
          />
          <Avatar
            firstname="Olha"
            lastname="Shcherbakova"
            image="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80"
            size="lg"
          />
        </div>
      </div>

      <Typography variant={TypographyTypeEnum.h1}>Badges</Typography>
      <div>
        <Badge text="text" size="md" type={BadgeTypeEnum.new} />
      </div>

      <Typography variant={TypographyTypeEnum.h1}>Radio buttons</Typography>
      <div>
        <RadioButton
          value={"cat"}
          name={"animals"}
          label={"Cat"}
          handleChange={radioHandler}
        />

        <RadioButton
          label={"Dog"}
          value={"dog"}
          name={"animals"}
          handleChange={radioHandler}
        />

        <RadioButton
          label={"Fox"}
          value={"fox"}
          name={"animals"}
          handleChange={radioHandler}
        />
      </div>

      <Typography variant={TypographyTypeEnum.h1}>Checkboxes</Typography>
      <div>
        <Checkbox
          checked={checkboxA}
          handleChange={handleChangeA}
          label={"Car"}
        />
        <Checkbox
          checked={checkboxB}
          handleChange={handleChangeB}
          label={"Bus"}
        />
      </div>

      <Typography variant={TypographyTypeEnum.h1}>Toggle</Typography>
      <div>
        <Toggle handleChange={handleChangeToggle} checked={toggle} />
      </div>

      <Typography variant={TypographyTypeEnum.h1}>Cards</Typography>
      <div className="cameras">
        {camerasCard?.map((item) => {
          return <Card key={item.id} item={item} isInCatalogue={true} />;
        })}
      </div>

      <Typography variant={TypographyTypeEnum.h1}>Inputs</Typography>
      <div>
        <Input
          name={"name"}
          value={password}
          label={"Enter password"}
          handleChange={handlePasswordChange}
        />
      </div>
    </div>
  );
}

export default App;
