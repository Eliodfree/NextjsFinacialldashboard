import React from "react";
import sideMenu ,{SideMenuProps }from "./SideMenu";
import Component from '../Login/Login';
import Sidemenu from '@/pages/components/sidemenu';

export  default{
    children:"",
    title:"components/sideMenu",
    component:Sidemenu,
}
const Template=(args:SideMenuProps)=>{
    return (
        <Sidemenu {...args}/>
    )
}
const props={
    defaultProps:()=>({})
}
 export const  SideMenuStory:any=Template.bind({});

 const defaultProps=props.defaultProps();
 SideMenuProps.storyName="SideMenu";
 SideMenuProps.args={
    ...defaultProps
 }