import { LightningElement, track, api } from 'lwc';

export default class LightningMap extends LightningElement {
  @api props;

  @track state = {
    mapMarkers: [],
  }

  connectedCallback() {
    this.setMapMarkers();
  }

  setMapMarkers() {
    this.props.data.forEach(school => {
      const marker = {
        location: {
            Latitude: school[this.props.latitude],
            Longitude: school[this.props.longitude],
        },
        title: school.Name,
        mapIcon: this.props.mapIcons,
      }
      this.state.mapMarkers.push(marker);
    });
  }
}