/**
 * @prop latitude Широта
 * @prop longitude Долгота
 */
export interface ICoordinate {
    latitude: string;
    longitude: string;
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
//Страница со списком локомотивов с полями (Наименование, Серия,
// Количество секции, Координаты для карте), CRUD операции для
// добавления, сделать возможность выбора точки на карте при
// добавлений локомотива.