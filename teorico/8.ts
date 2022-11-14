// 8. Usando javascript o typescript, codifique y explique (con comentarios) 3 patrones de diseño de Software (1 creacional, 1 estructural y 1 comportamental).

// Singleton (creacional)
// Se basa en que sólo existe un objeto de su clase y proporciona un único punto de acceso a él para cualquier otro código.

/*
 * La clase Singleton define el método `getInstance` que permite a
 * los clientes acceder a la instancia única del singleton.
 */
class Singleton {
  private static instance: Singleton;

  /*
   * El constructor del Singleton debe ser siempre privado para evitar
   * las llamadas directas con el operador `new`.
   */
  private constructor() {}

  /**
   * El método estático que controla el acceso a la instancia singleton.
   *
   * Esta implementación permite subclasificar la clase Singleton
   * manteniendo sólo una instancia de cada subclase.
   */
  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }

  /**
   * Finalmente, cualquier singleton debe definir alguna lógica de
   * negocio, ejecutada en su instancia.
   */
  public someBusinessLogic() {
    // ...
  }
}

// Adaptador (estructural)
// Permite que objetos incompatibles colaboren

/**
 * Target define la interfaz específica del dominio utilizada por
 * el código del cliente.
 */
class Target {
  public request(): string {
    return "Target: The default target's behavior.";
  }
}

/**
 * El Adaptee contiene algunos comportamientos útiles, pero su
 * interfaz es incompatible con el código del cliente existente. El
 * Adaptee necesita alguna adaptación antes de que el código del
 * cliente pueda utilizarlo.
 */
class Adaptee {
  public specificRequest(): string {
    return ".eetpadA eht fo roivaheb laicepS";
  }
}

/**
 * Adapter hace que la interfaz de Adaptee sea compatible con la interfaz de Target
 */
class Adapter extends Target {
  private adaptee: Adaptee;

  constructor(adaptee: Adaptee) {
    super();
    this.adaptee = adaptee;
  }

  public request(): string {
    const result = this.adaptee.specificRequest().split("").reverse().join("");
    return `Adapter: (TRANSLATED) ${result}`;
  }
}

// Cadena de responsabilidad (comportamental)
// Este permite pasar la solicitud a lo largo de la cadena de posibles manejadores hasta que uno de ellos maneje la solicitud.

/**
 * Interface Component declara un método `accept` que debe
 * tomar la interfaz base del visitante como argumento.
 */
interface Component {
  accept(visitor: Visitor): void;
}

/**
 * Cada Component Concrete debe implementar el método `accept`
 * de forma que llame al método del visitante correspondiente a la
 * clase del componente.
 */
class ConcreteComponentA implements Component {
  /**
   * Observa que estamos llamando a `visitConcreteComponentA`,
   * que coincide con el nombre de la clase actual. De este modo,
   * permitimos que el visitante conozca la clase del componente con
   * el que trabaja.
   */
  public accept(visitor: Visitor): void {
    visitor.visitConcreteComponentA(this);
  }

  /**
   * Los componentes Concrete pueden tener métodos especiales que no
   * existen en su clase base o interfaz. Visitor aún puede utilizar estos
   * métodos ya que conoce la clase Concrete del componente.
   */
  public exclusiveMethodOfConcreteComponentA(): string {
    return "A";
  }
}

class ConcreteComponentB implements Component {
  /**
   * Lo mismo aca: visitConcreteComponentB => ConcreteComponentB
   */
  public accept(visitor: Visitor): void {
    visitor.visitConcreteComponentB(this);
  }

  public specialMethodOfConcreteComponentB(): string {
    return "B";
  }
}

/**
 * La interface Visitor declara un conjunto de métodos de visita que
 * corresponden a clases de componentes. La firma de un método de visita
 * permite al visitante identificar la clase exacta del componente con el que
 * está tratando.
 */
interface Visitor {
  visitConcreteComponentA(element: ConcreteComponentA): void;

  visitConcreteComponentB(element: ConcreteComponentB): void;
}

/**
 * Concrete Visitors implementan varias versiones del mismo
 * algoritmo, que puede funcionar con todas las clases de componentes
 * concretos.
 *
 * Puedes experimentar el mayor beneficio con el patron de Visitor
 * cuando lo usas con una estructura de objetos compleja, como un árbol
 * de Composite. En este caso, puede ser útil almacenar algún estado
 * intermedio del algoritmo mientras mientras se ejecutan los métodos del
 * visitante sobre varios objetos de la estructura.
 */
class ConcreteVisitor1 implements Visitor {
  public visitConcreteComponentA(element: ConcreteComponentA): void {
    console.log(
      `${element.exclusiveMethodOfConcreteComponentA()} + ConcreteVisitor1`
    );
  }

  public visitConcreteComponentB(element: ConcreteComponentB): void {
    console.log(
      `${element.specialMethodOfConcreteComponentB()} + ConcreteVisitor1`
    );
  }
}

class ConcreteVisitor2 implements Visitor {
  public visitConcreteComponentA(element: ConcreteComponentA): void {
    console.log(
      `${element.exclusiveMethodOfConcreteComponentA()} + ConcreteVisitor2`
    );
  }

  public visitConcreteComponentB(element: ConcreteComponentB): void {
    console.log(
      `${element.specialMethodOfConcreteComponentB()} + ConcreteVisitor2`
    );
  }
}
