import "./timer.css";
import Pomodoro from "./Pomodoro";
import Settings from "./Settings";
import { useState } from "react";
import SettingsContext from "./SettingsContext";

function Timer() {
  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);

  return (
    <main>
      <SettingsContext.Provider
        value={{
          showSettings,
          setShowSettings,
          workMinutes,
          breakMinutes,
          setWorkMinutes,
          setBreakMinutes,
        }}
      >
        {showSettings ? <Settings /> : <Pomodoro />}
      </SettingsContext.Provider>
    </main>
  );
}

export default Timer;
