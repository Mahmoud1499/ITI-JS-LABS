class Tickets {
  tickets = [];

  createTicket(
    flightNum,
    seatNum,
    depatureAirport,
    arrivalAirport,
    travellingDate = new Date("01/01/2024")
  ) {
    let ticket = {
      ticketID: `${flightNum}-${seatNum}`,
      seatNum,
      flightNum,
      airport: {
        depatureAirport,
        arrivalAirport,
      },
      travellingDate,
    };
    this.tickets.push(ticket);
  }
  DisplayAllTickets() {
    for (let i = 0; i < this.tickets.length; i++) {
      console.log(`Ticket Num ${i + 1} details :`);
      console.log(`Ticket Id : ${this.tickets[i].ticketID}`);
      console.log(`Flight Number : ${this.tickets[i].flightNum}`);
      console.log(`Seat Number : ${this.tickets[i].seatNum}`);

      console.log(
        `Depature Airport : ${this.tickets[i].airport.depatureAirport}`
      );
      console.log(
        `Arrival Airport : ${this.tickets[i].airport.arrivalAirport}`
      );
      console.log(`Travelling Date : ${this.tickets[i].travellingDate}`);
      console.log("=".repeat(100));
    }
  }
  getTicketByID(id) {
    for (let i = 0; i < this.tickets.length; i++) {
      if (this.tickets[i].ticketID === id) {
        console.log(`Ticket Id : ${this.tickets[i].ticketID}`);
        console.log(`Flight Number : ${this.tickets[i].flightNum}`);
        console.log(
          `Depature Airport : ${this.tickets[i].airport.depatureAirport}`
        );
        console.log(
          `Arrival Airport : ${this.tickets[i].airport.arrivalAirport}`
        );
        console.log(`Travelling Date : ${this.tickets[i].travellingDate}`);
      }
    }
  }
  updateTicketByID(id, newDrparureAiport, newArrivalAiport, newTravellingDate) {
    for (let i = 0; i < this.tickets.length; i++) {
      if (this.tickets[i].ticketID == id) {
        this.tickets[i].airport.depatureAirport = newDrparureAiport;
        this.tickets[i].airport.arrivalAirport = newArrivalAiport;
        this.tickets[i].arrivalAirport = newTravellingDate;
        console.log(
          `Updated data for ticketID (${this.tickets[i].ticketID}) is :`
        );
        this.getTicketByID(this.tickets[i].ticketID);
      }
    }
  }
}

module.exports = {
  Tickets,
};
