import { Component } from '@angular/core';
import { Person } from '../../shared/interfaces/person';
import { Step3PersonTableInput } from '../step3-person-table-input/step3-person-table-input';

@Component({
  imports: [Step3PersonTableInput],
  selector: 'app-step4-for-directive',
  styleUrl: './step4-for-directive.css',
  templateUrl: './step4-for-directive.html',
})
export class Step4ForDirective {
  persons: Person[] = [
    { firstname: 'Imogen', lastname: 'McAdam', email: 'imcadam0@unicef.org' },
    { firstname: 'Tiff', lastname: 'Bissill', email: 'tbissill1@skype.com' },
    { firstname: 'Tobe', lastname: 'Mallatratt', email: 'tmallatratt2@gnu.org' },
    { firstname: 'Artemas', lastname: 'Manketell', email: 'amanketell3@acquirethisname.com' },
    { firstname: 'Garey', lastname: 'Hairs', email: 'ghairs4@google.com' },
    { firstname: 'Allsun', lastname: 'Ploughwright', email: 'aploughwright5@loc.gov' },
    { firstname: 'Kelley', lastname: 'Yonge', email: 'kyonge6@networkadvertising.org' },
    { firstname: 'Susanetta', lastname: 'Tapply', email: 'stapply7@yelp.com' },
    { firstname: 'Sebastien', lastname: 'Bettesworth', email: 'sbettesworth8@fastcompany.com' },
    { firstname: 'Marius', lastname: 'Raylton', email: 'mraylton9@example.com' },
    { firstname: 'Tyler', lastname: 'Ratter', email: 'trattera@wikipedia.org' },
    { firstname: 'Brit', lastname: 'McGiffin', email: 'bmcgiffinb@godaddy.com' },
    { firstname: 'Orrin', lastname: 'Jimpson', email: 'ojimpsonc@163.com' },
    { firstname: 'Vivia', lastname: 'Labuschagne', email: 'vlabuschagned@simplemachines.org' },
    { firstname: 'Abigail', lastname: 'Coolbear', email: 'acoolbeare@ask.com' },
    { firstname: 'Stefa', lastname: 'Romayne', email: 'sromaynef@t-online.de' },
    { firstname: 'Kendell', lastname: 'Baines', email: 'kbainesg@plala.or.jp' },
    { firstname: 'Shaina', lastname: 'Pelcheur', email: 'spelcheurh@patch.com' },
    { firstname: 'Eugenie', lastname: 'Elam', email: 'eelami@wikispaces.com' },
    { firstname: 'Bart', lastname: 'Sulley', email: 'bsulleyj@over-blog.com' },
  ];
}
