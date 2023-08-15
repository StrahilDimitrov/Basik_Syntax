function vacation(peopleGroup, groupType, weekDay) {

    let price = 0;

    switch (groupType) {
        case 'Students':
            switch (weekDay) {
                case 'Friday':
                    price = peopleGroup * 8.45;
                    break;

                case 'Saturday':
                    price = peopleGroup * 9.80;
                    break;

                case 'Sunday':
                    price = peopleGroup * 10.46;
                    break;
            }

            if (peopleGroup >= 30) {
                price -= price * 0.15;
            }
            break;

        case 'Business':
            switch (weekDay) {
                case 'Friday':
                    if (peopleGroup >= 100) {
                        peopleGroup -= 10;
                    }
                    price = peopleGroup * 10.90;
                    break;

                case 'Saturday':
                    if (peopleGroup >= 100) {
                        peopleGroup -= 10;
                    }
                    price = peopleGroup * 15.60;
                    break;

                case 'Sunday':
                    if (peopleGroup >= 100) {
                        peopleGroup -= 10;
                    }
                    price = peopleGroup * 16;
                    break;
            }
            break;

        case 'Regular':
            switch (weekDay) {
                case 'Friday':
                    price = peopleGroup * 15;
                    break;

                case 'Saturday':
                    price = peopleGroup * 20;
                    break;

                case 'Sunday':
                    price = peopleGroup * 22.50;
                    break;
            }

            if (peopleGroup >= 10 && peopleGroup <= 20) {
                price -= price * 0.05;
            }
            break;
    }

    console.log(`Total price: ${price.toFixed(2)}`);
}
vacation(
    100,
    "Business",
    "Sunday"
)