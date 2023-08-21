import { useRoutes } from "react-router-dom";
import { ProjectRoutes } from "./project.routes";
import { LessonsRoutes } from "./lessons.routes";

export let Allroutes=()=>{

    return useRoutes([ProjectRoutes,LessonsRoutes])
}