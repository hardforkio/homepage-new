export interface Technology {
  name: string
  link: string
}

export interface TechnologyOnDisk extends Technology {
  uuid: string
}
