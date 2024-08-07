import { TextField } from "@mui/material";
import { CancelOutlined, Search } from "@mui/icons-material";
import { useState } from "react";

const SearchBar = ({ updateQueryParam }: any) => {
  const [searchText, setSearchText] = useState<string>("");

  const handleClearText = (event: any) => {
    setSearchText("");
    updateQueryParam(event, "");
  };

  return (
    <form
      onSubmit={(event) => searchText && updateQueryParam(event, searchText)}
      style={{ width: "50%", minWidth: 120 }}
    >
      <TextField
        sx={{
          width: "100%",
          minWidth: 120,
        }}
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
        InputProps={{
          sx: {
            height: "40px",
            padding: "8px 12px",
            borderRadius: "20px",
            fontSize: 14,
            width: "100%",
          },
          autoComplete: "off",
          placeholder: "Search",
          startAdornment: (
            <Search color="disabled" fontSize="small" sx={{ marginRight: 1 }} />
          ),
          endAdornment: searchText ? (
            <CancelOutlined
              color="disabled"
              fontSize="small"
              onClick={handleClearText}
              sx={{
                cursor: "pointer",
              }}
            />
          ) : null,
        }}
      />
    </form>
  );
};
export default SearchBar;
