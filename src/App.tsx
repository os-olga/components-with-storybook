import React from "react";
import { Avatar } from "components/Avatar";
import { Badge, BadgeTypeEnum } from "components/Badge";
import { Typography, TypographyTypeEnum } from "components/Typography";

import "./App.css";

function App() {
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
    </div>
  );
}

export default App;
