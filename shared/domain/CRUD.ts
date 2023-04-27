import { ModelId } from "./MODELID";

export interface CRUD<Model, Id extends ModelId> {
    find(id: Id): Promise<Model | null>;
    save(model: Model): Promise<Id>;
    update(model: Model): Promise<void>;
    delete(id: Id): Promise<void>;
}