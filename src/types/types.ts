export interface CardType {
    id: string,
    idAPI: number,
    escondido: boolean,
    morto: boolean,
    trunfo: boolean,
    universo: string,
    nome: string,
    imagem: string,
    forca: number,
    destreza: number,
    inteligencia: number
}
export interface CardStatusType {
    forca: number,
    destreza: number,
    inteligencia: number
}
export interface BotaoGerarCardsPropsType {
    texto: string,
}
export interface SetCardsStateType {
    timeInimigo: Array<CardType>,
    timeJogador: Array<CardType>,
    preLoadTimeInimigo: Array<CardType>,
    preLoadTimeJogador: Array<CardType>,
    userReadyState: boolean,
    fakeCardsActive: boolean
};
export interface CardPropsType {
    tipo : string,
    cardInfos : CardType,
    indice : number
};

export interface CardsFakePropsType {
    tipo: string
};
export interface FakeCardPropsType {
    morto: boolean,
    indice : number
};
export interface PropInfoCardCombateType {
    idCard: string | undefined,
    valorAtributo: number | undefined
};
export interface InfoCardCombateType {
    idCard: string | undefined,
    atributo: "forca" | "destreza" | "inteligencia" | undefined,
    valorAtributo: number | undefined
};
export interface CombateInfosType {
    infosAtacante: InfoCardCombateType;
}
export interface PlayerCardType {
    playerCardType : 'disney' | 'herois' | 'animes' | 'aleatorio'
};
export interface SaveGameType {
    playerCardType: 'disney' | 'herois' | 'animes' | 'aleatorio',
    pontos: number,
    cardsInimigos: Array<CardType>,
    cardsJogador: Array<CardType>
};
export interface StateSaveGameType {
    saveGame: undefined | SaveGameType,
    saveGameRequest: boolean,
    loadedGameType: boolean
};
export interface ModalStateType {
    modalMenuActive: boolean,
    modalInfosActive: boolean,
    modalVitoriaActive: false,
    modalDerrotaActive: false
};
export interface PontuacaoStoreType {
    pontosJogador: number
};
export interface SoundStorageType {
    musicType: undefined | 'combate' | 'selecao',
    soundEffect: {
        effectType: undefined | string,
        effectActive: boolean
    }
};
export interface LoadingStoreType {
    resourcesLoadingState: boolean,
    serverLoadingState: boolean,
    cardsLoadingState: boolean,
    cardsPreLoadingState: boolean
};

export interface APIRequestFillCards {
    nomesAtuais: Array<string>,
	cardsDisney: number,
	cardsHeroi: number,
	cardsAnime: number
};

export interface  APIResponseFillCards {
    cardsDisney: Array<any>,
	cardsHeroi: Array<any>,
	cardsAnime: Array<any>
};

export interface SelectedStatusType {
    selectedStatus: boolean,
    element: any,
    elementId: string | undefined
};

export interface ExtraAnimationsType {
    pendingStartAnimation: boolean,
    pendingResetDefeatedCards: boolean
};