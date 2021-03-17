import _ from "lodash";

export const countrySightRatingUpdate = (
  country,
  sightNumName,
  userName,
  userRate
) => {
  const x = (sightNumName, userName, userRate, LANG) => {
    const place = country.localizations[LANG].places.find(
      (elem) => elem.numName == sightNumName
    );

    const updateRating = (placeRating, name, num) => {
      let total = 0;
      for (let key in placeRating.users) {
        if (key != name) {
          console.log("if");
          total += placeRating.users[key];
        }
      }
      total += num;

      if (name in placeRating.users) {
        total = Math.round(total / Object.keys(placeRating.users).length);
      } else {
        total = Math.round(total / (Object.keys(placeRating.users).length + 1));
      }

      const newRating = {
        total: total,
        users: {
          [name]: num,
        },
      };

      return _.merge(placeRating, newRating);
    };

    if (place) {
      updateRating(place.rating, userName, userRate);
    }
  };

  x(sightNumName, userName, userRate, "EN");
  x(sightNumName, userName, userRate, "RU");
  x(sightNumName, userName, userRate, "BE");
};
