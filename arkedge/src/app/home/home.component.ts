import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  sevices;
  solution;

  constructor() {
    this.sevices = [
      {
        title: 'IT, telecom and software',
        color: 'skyblue',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.',
        icon: '#icon_ITBpo'
      },
      {
        title: 'ITES - BPO & KPO',
        color: 'yellow ',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.',
        icon: '#icon_customerService'
      },
      {
        title: 'Engineering & Manufacturing',
        color: 'orange',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.',
        icon: '#icon_engineeringMgf'
      },
      {
        title: 'Consumer goods and retail',
        color: 'limegreen',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.',
        icon: '#icon_consumerGood'
      },
      {
        title: 'Financial services and insurance',
        color: 'purple',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.',
        icon: '#icon_finervice'
      },
      {
        title: 'Health care & Pharmaceuticals',
        color: 'blue',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.',
        icon: '#icon_customerService'
      },
    ];
    this.solution = [
      {
        title: 'Data Management',
        color: 'red',
        list : [
          {name: 'Cleanse Dataset'},
          {name: 'Data Mapping & Conversion'},
          {name: 'Data Migration & Consolidation'},
          {name: 'Spend Analysis'}
        ],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio',
        icon: '#icon_mgmt'
      },
      {
        title: 'Software Engineering',
        color: 'blue',
        list : [
          {name: 'Product Engineering'},
          {name: 'Application Development'},
          {name: 'UX/UI Development'},
          {name: 'Software Testing & QA'}
        ],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio',
        icon: '#icon_softEngg'
      },
      {
        title: 'IT Staffing & Training',
        color: 'green',
        list : [
          {name: 'Staffing Services'},
          {name: 'Industries'},
          {name: 'Courses'},
          {name: 'Program Calendar'}
        ],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio',
        icon: '#icon_training'
      },
    ];
  }

  images = [62, 83, 466, 965, 982, 1043, 738].map((n) => `https://picsum.photos/id/${n}/900/500`);

  testimonials = [
    {
      clientView: ' We ensure excellence in service through understanding of our clients business and their unique requirements. Due to our close relationships and constant interactions with clients, we have developed solid understanding and insight in our focus industries that include:',
      clientName: 'xyz Company'
    },
    {
      clientView: ' We ensure excellence in service through understanding of our clients business and their unique requirements. Due to our close relationships and constant interactions with clients, we have developed solid understanding and insight in our focus industries that include:',
      clientName: 'ABC Company'
    },
    {
      clientView: ' We ensure excellence in service through understanding of our clients business and their unique requirements. Due to our close relationships and constant interactions with clients, we have developed solid understanding and insight in our focus industries that include:',
      clientName: '123 Company'
    },
    {
      clientView: ' We ensure excellence in service through understanding of our clients business and their unique requirements. Due to our close relationships and constant interactions with clients, we have developed solid understanding and insight in our focus industries that include:',
      clientName: 'QWERTy'
    },
];


projects = [
  {
    gridClass: 'col-lg-6 col-md-6 col-sm-6 col-xs-12',
    imgPath: '../../assets/images/project',
    title: 'DATANEST',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
  },
  {
    gridClass: 'col-lg-3 col-md-3 col-sm-6 col-xs-12',
    imgPath: '../../assets/images/project',
    title: 'DATANEST',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
  },
  {
    gridClass: 'col-lg-3 col-md-3 col-sm-6 col-xs-12',
    imgPath: '../../assets/images/project',
    title: 'DATANEST',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
  },
  {
    gridClass: 'col-lg-3 col-md-3 col-sm-6 col-xs-12',
    imgPath: '../../assets/images/project',
    title: 'DATANEST',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
  },
  {
    gridClass: 'col-lg-3 col-md-3 col-sm-6 col-xs-12',
    imgPath: '../../assets/images/project',
    title: 'DATANEST',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
  }
];



  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;

  @ViewChild('carousel', { static: true }) carousel: NgbCarousel;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }
}

