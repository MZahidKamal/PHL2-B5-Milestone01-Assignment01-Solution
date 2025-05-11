{
    function formatString(input: string, toUpper?: boolean): string {
        if (toUpper === false) {
            return input.toLowerCase();
        } else {
            return input.toUpperCase();
        }
    }

    console.log(formatString("Hello"));
    console.log(formatString("Hello", true));
    console.log(formatString("Hello", false));










    type Book = {
        title: string;
        rating: number;
    }
    const filterByRating = (items: Book[]): Book[] => {
        return items.filter(item => item.rating >= 4)
    }

    const books = [
        {title: "Book A", rating: 4.5},
        {title: "Book B", rating: 3.2},
        {title: "Book C", rating: 5.0}
    ];
    console.log(filterByRating(books));










    const concatenateArrays = <T>(...args: T[][]) => {
        const totalArgument = args.length;
        let newArray: T[] = [];
        for (let i: number = 0; i < totalArgument; i++) {
            newArray = newArray.concat(args[i]);
        }
        return newArray;
    };

    console.log(concatenateArrays<string>(["a", "b"], ["c"]));
    console.log(concatenateArrays<number>([1, 2], [3, 4], [5]));










    class Vehicle {
        private readonly make: string;
        public year: number;

        constructor(make: string, year: number) {
            this.make = make;
            this.year = year;
        }

        getInfo(): string {
            return `Make: ${this.make}, Year: ${this.year}.`;
        }
    }

    class Car extends Vehicle {
         private readonly model: string;

        constructor(make: string, year: number, model: string) {
            super(make, year);
            this.model = model;
        }

        getModel(): string {
            return `Model: ${this.model}.`;
        }
    }

    const myCar = new Car('Toyota', 2020, 'Corolla');
    console.log(myCar.getInfo());
    console.log(myCar.getModel());










    const processValue = (value: string | number): number => {
        if (typeof value === "string") {
            return value.length > 0 ? value.length : 0;
        }
        return value * 2;
    }

    console.log(processValue("hello"));
    console.log(processValue(10));










    interface Product {
        name: string;
        price: number;
    }
    const getMostExpensiveProduct = (products: Product[]): Product | null => {
        if (products.length === 0){
            return null;
        }
        return [...products].sort((productA, productB) => (productB.price - productA.price))[0];
    }

    const products = [
        { name: "Pen", price: 10 },
        { name: "Notebook", price: 25 },
        { name: "Bag", price: 50 }
    ];
    console.log(getMostExpensiveProduct(products));
    console.log(products);










    enum Day {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }
    const getDayType = (day: Day): string => {
      return day >= Day.Saturday ? "Weekend" : "Weekday";
    }

    console.log(getDayType(Day.Monday));
    console.log(getDayType(Day.Sunday));










    const squareAsync = async (n: number): Promise<number> => {
        const response = await new Promise((resolve: (value: number) => void, reject: (reason: Error)=> void) => {
            if (n < 0) {
                reject(new Error('Error: Negative number not allowed!'));
            }
            setTimeout(() => {
                resolve(n * n);
            }, 1000)
        });
        return response;
    }

    squareAsync(4).then(console.log).catch(console.error);
    squareAsync(-3).then(console.log).catch(console.error);
}
