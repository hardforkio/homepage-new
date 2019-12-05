import React, { FunctionComponent } from 'react'
import { useHome, useProjects } from '../../hooks/data'
import { HomeData } from '../../data/home/types'
import { ProjectData } from '../../data/project/types'
import { HomePageComponent } from './component'

export const HomePage: FunctionComponent<{}> = () => {
  const data: HomeData = useHome()
  const projects: ProjectData[] = useProjects()
  return <HomePageComponent {...data} projects={projects} />
}
