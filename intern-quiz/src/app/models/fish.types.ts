
export interface FishAttributes {
fishName: string;
fishPictureUrl: string;
}

export interface FishData {
id: number;
attributes: FishAttributes;
}

export interface FishGuideAttributes {
fishName: string;
fishPictureUrl: string;
}

export interface FishGuideData {
id: number;
attributes: FishGuideAttributes;
}

export interface UserAttributes {
username: string;
email: string;
}

export interface UserData {
id: number;
attributes: UserAttributes;
}

export interface ScoreAttributes {
scoreMin: number;
user: {
    data: UserData;
};
fishguide: {
    data: FishGuideData;
};
}

export interface ScoreData {
length: number;
forEach(arg0: (scoreData: { attributes: { fishguide: { data: any; }; scoreMin: any; }; }) => void): unknown;
id: number;
attributes: ScoreAttributes;
}

export interface FishResponse {
data: ScoreData;
meta: any;
}
