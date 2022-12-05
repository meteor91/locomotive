/**
 * @prop latitude Широта
 * @prop longitude Долгота
 */
export interface ICoordinate {
    latitude: number;
    longitude: number;
}

/**
 * @prop id Идентификатор
 * @prop name Название
 * @prop series Серия
 * @prop sectionsCount Количество секции
 * @prop coords Координаты
 */
export interface ILocomotive {
    id: string;
    name: string;
    series: string;
    sectionsCount: number;
    coords: ICoordinate;
}
