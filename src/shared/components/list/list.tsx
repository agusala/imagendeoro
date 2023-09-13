import { Divider, List, ListItem } from "@mui/material";
import React from "react";

interface IProps {
  items: any[];
  renderItem: (item: any) => React.ReactNode;
  handleItemClick: (item: any) => void;
}

export const ListItems = ({ items, renderItem, handleItemClick }: IProps) => {

  return (
    <div>
      <List
        sx={{
          width: "100%",
          bgcolor: "background.paper",
          textAlign: "center",
          margin: "auto",
        }}
      >
        {items.map((item: any, i) => {
          return (
            <>
              <ListItem key={i} onClick={() => handleItemClick(item)} style={{backgroundColor:'#fc0131'}}>
                {renderItem(item)}
              </ListItem>
              <Divider />
            </>
          );
        })}
      </List>
    </div>
  );
};