import React from "react";
import Select, {SelectChangeEvent} from "@mui/material/Select";
import {FormControl} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import styles from "./MusicSelector.module.scss";
import MenuItem from "@mui/material/MenuItem";

const MusicSelector: React.FC<{
  withMusic: boolean,
  setWithMusic: (value: boolean) => void
  disabled?: boolean
}> = ({withMusic, setWithMusic, disabled}) => {

  const handleChange = (event: SelectChangeEvent<number>) => {
    setWithMusic(Boolean(event.target.value));
  };

  return (
    <FormControl sx={{minWidth: 140}} size="small">
      <Select
        id="music-selector"
        value={withMusic ? 1 : 0}
        onChange={handleChange}
        IconComponent={KeyboardArrowDownIcon}
        className={styles.musicSelector}
        disabled={disabled}
      >
        <MenuItem value={1}>With Music</MenuItem>
        <MenuItem value={0}>Without Music</MenuItem>
      </Select>
    </FormControl>
  );
}

export default MusicSelector;
