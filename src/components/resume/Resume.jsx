import React, { useState } from "react";
import "./Resume.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { experiences } from "../../constants";

const Resume = () => {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <section className="resume container section" id="resume">
            <h2 className="section__title">Parcours</h2>

            <div className="resume__container">
                <Tabs
                    className="tabs"
                    selectedIndex={tabIndex}
                    onSelect={(index) => setTabIndex(index)}
                    selectedTabClassName="is-active"
                    selectedTabPanelClassName="is-active"
                >
                    <TabList className="tab__list">
                        {experiences.map(({ id, tab }) => (
                            <Tab className="tab" key={`tab-${id}`}>
                                <span className="button">{tab}</span>
                            </Tab>
                        ))}
                    </TabList>

                    {experiences.map(({ id, company, yearsActive, title, information }) => (
                        <TabPanel className="tab__panel" key={`panel-${id}`}>
                            <h3 className="tab__panel-title">{title}</h3>
                            <p className="tab__panel-subtitle">{company} · {yearsActive}</p>
                            <ul className="tab__panel-list">
                                {information.map((info) => <li key={info}>{info}</li>)}
                            </ul>
                        </TabPanel>
                    ))}
                </Tabs>
            </div>
        </section>
    );
};

export default Resume;
