export interface AsTableColumnConfig {
  fontSize: number;
  fontRate: AsTableColumnFontRate;
}

export interface AsTableColumnFontRate {
  CHAR_RATE: number;
  NUM_RATE: number;
  OTHER_RATE: number;
}

export interface AsTableColumnProps {
 label: string;
 fontSize?: AsTableColumnConfig["fontSize"];
 fontRate?: AsTableColumnConfig["fontRate"];
}
