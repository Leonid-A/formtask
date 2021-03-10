export type Condit = {
    and: {
            path: string;
            operator: string;
            value?: string | string[];
        }[]
}

export type Comp = {
    label: string;
    read: boolean;
    write: boolean;
    name: string;
    component: string;
    placeholder?: string;
    conditions?: Condit;
    filters?: Filter;
}

export type Filter = {
    role: {
        in: string[];
    }
}

export type Sect = {
    title: string;
    editable: boolean;
    selectedFields: Comp[];
}

type SectProps = {
    sections?: Sect[];
}
export type Props = {
    path: string;
    title: string;
    component: string;
    icon: string;
    properties: SectProps;
}

export type Page = {
    classId: string;
    tabs: Props[];
    dialog?: object;
    widgets?: {}[];
}