import React, { FunctionComponent } from 'react'

import { HomeData } from '../../data/home/types'
import { ProjectData } from '../../data/project/types'
import { useHome, useProjects } from '../../hooks/data'
import { HomePageComponent } from './component'

export const HomePage: FunctionComponent<{}> = () => {
  const data: HomeData = useHome()
  const projects: ProjectData[] = useProjects()
  return <HomePageComponent {...data} projects={projects} />
}
