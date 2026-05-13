export type progressObj = {
  type: "progress";
  status: string;
  primaryText: string;
  secondaryText: string;
  backgroundColor: string;
  display: "flex" | "none";
};

export type farewellObj = {
  type: "farewell";
  backgroundColor: string;
  primaryText: string;
};

export function getFarewellObject(language: string): farewellObj {
  const farewellColors: string[] = [
    "#7c5cff",
    "#facc15",
    "#fb923c",
    "#38bdf8",
    "#14b8a6",
  ];

  const options: string[] = [
    `Farewell, ${language} 🫡`,
    ` Adios, ${language} 💨`,
    `‍💨 ${language}…  it’s been a ride 😮`,
    ` Rest easy, ${language} 🕊`,
    ` ${language} , you were cool 😎`,
    ` ${language}  has left the building 🎤`,
    ` We’ll miss you, ${language} 🫶`,
    ` ${language}  faded into the air 🌬`,
    ` ${language} , you did your thing 🧢`,
    ` ${language}  rode off into the sunset 🌅`,
    ` ${language} , your watch has ended 🛡`,
    ` ${language}  bites the dust 💥`,
  ];
  const randomIndexForText: number = Math.floor(Math.random() * options.length);
  const randomIndexForColor: number = Math.floor(
    Math.random() * farewellColors.length,
  );

  return {
    type: "farewell",
    backgroundColor: farewellColors[randomIndexForColor],
    primaryText: options[randomIndexForText],
  };
}

export function updateProgress(status: string): progressObj {
  const gameProgress: progressObj[] = [
    {
      type: "progress",
      status: "won",
      primaryText: "You Win!",
      secondaryText: "Well Done ! 🎉",
      backgroundColor: "seagreen",
      display: "flex",
    },
    {
      type: "progress",
      status: "lost",
      primaryText: "Game Over!",
      secondaryText: "You Lose! Better Start Learning Assembly 😭",
      backgroundColor: "firebrick",
      display: "flex",
    },
    {
      type: "progress",
      status: "ongoing",
      primaryText: "",
      secondaryText: "",
      backgroundColor: "inherit",
      display: "none",
    },
  ];
  let currentObj!: progressObj;
  for (const phase of gameProgress) {
    if (status === phase.status) {
      currentObj = phase;
    }
  }

  return currentObj;
}
