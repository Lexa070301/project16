import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Muser} from 'src/app/shared/models/muser.model';
import {MusersService} from 'src/app/shared/services/musers.service';
import {isNullOrUndefined} from 'util';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: Muser[];
  searchStr: string;
  sort: string;
  @Output() searchEvent = new EventEmitter<any>();

  constructor(private musersService: MusersService, private router: Router) {
  }

  ngOnInit(): void {
    this.searchStr = '';
    this.sort = 'id-up';
    this.getData();
  }

  onSearch() {
    this.searchEvent.emit(this.searchStr);
  }

  onSelect(sort: string) {
    if (sort === 'id-up') {
      this.users.sort((prev, next) => prev.id - next.id);
    } else if (sort === 'date-up') {
      this.users.sort((prev, next) => {
        if (prev.birth > next.birth) return -1;
        if (prev.birth > next.birth) return 1;
      });
    } else if (sort === 'id-down') {
      this.users.sort((prev, next) => next.id - prev.id);
    } else if (sort === 'date-down') {
      this.users.sort((prev, next) => {
        if (prev.birth < next.birth) return -1;
        if (prev.birth < next.birth) return 1;
      });
    }
  }

  async getData() {
    try {
      let users = this.musersService.getAll();
      this.users = isNullOrUndefined(await users) ? [] : await users;
    } catch (err) {
      console.error(err);
    }
    let i = 0;
    for (let user of this.users) {
      this.users[i].birth = new Date(Number(user.birth.slice(4, 8)), Number(user.birth.slice(2, 4)), Number(user.birth.slice(0, 2)));
      i++;
    }
  }

  onLinkProfile(id: number) {
    this.router.navigate([this.router.url, 'profile', id]);
  }

  onAddProfile() {
    this.router.navigate([this.router.url, 'profile']);
  }
}
