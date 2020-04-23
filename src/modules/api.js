class Geolocator {
   constructor(name, username) {
      this.name = name;
      this.username = username;
   }
   
   combine() {
      return this.name + this.username;
   }
};