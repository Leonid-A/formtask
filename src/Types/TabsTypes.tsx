export type PageType = {
    classId: string;
    tabs: Props[];
    dialog?: object;
    widgets?: {}[];
}

export interface Props {
    path: string;
    title: string;
    component: string;
    icon: string;
    properties: SectProps;
    click?: (value: Props | null) => void;
}

type SectProps = {
    sections?: Sect[];
}

export type Sect = {
    title: string;
    editable: boolean;
    selectedFields: Comp[];
}

export type Comp = {
    label: string;
    read: boolean;
    write: boolean;
    name: string;
    component: string;
    placeholder?: string;
    conditions?: Condition;
    filters?: Filter;
}

export type Condition = {
    and?: {
            path: string;
            operator: string;
            value?: string | string[];
        }[]
    or?: {}[]
}

export type Filter = {
    role: {
        in: string[];
    }
}