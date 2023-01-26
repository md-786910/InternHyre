import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
function PlayListDesc() {
  return (
    <div className="py-3">
      <Tabs>
        <TabList>
          <Tab>Description</Tab>
          <Tab>Course material</Tab>
          <Tab>QA'S</Tab>
        </TabList>

        <div className="p-3">
          <TabPanel>
            <h2>Any content 1</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 3</h2>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
}

export default PlayListDesc;
