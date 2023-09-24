export abstract class Serializer<F, T>{

	abstract serialize(value: F): T 

	abstract deserialize(value: T): F

}