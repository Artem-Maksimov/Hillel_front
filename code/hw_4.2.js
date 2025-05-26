  const str = `123` ;

  if (str[0] === str[1] && str[1] === str[2]) {
      console.log(`Все цифры одинаковые`);
    }
    else if (str[0] === str[1] || str[1] === str[2]) {
      console.log(`2 цифры одинаковые`);
    } else
      console.log(`Все цифры не одинаковые`);