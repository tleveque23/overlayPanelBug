import { Component } from '@angular/core';
import { OverlayPanel } from 'primeng/primeng';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  panelContent: string;

  openPanel(event, op: OverlayPanel, panelNumber: number) {

    switch (panelNumber) {
      case 1:
        this.panelContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis consequatur corporis doloribus \n' +
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis consequatur corporis doloribus \n' +
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis consequatur corporis doloribus \n' +
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis consequatur corporis doloribus';
        break;
      case 2:
        this.panelContent = 'gdfgfd\n' +
          'gdfgdf\n' +
          'gdfg\n' +
          'dfg\n' +
          'fdg\n' +
          'df\n' +
          'g\n' +
          'dfg\n' +
          'fd\n' +
          'g\n' +
          'df\n' +
          'g\n' +
          'df\n' +
          'gdf\n' +
          'gdfgdf\n' +
          'gdf\n' +
          'gdf\n' +
          'g\n' +
          'df\n' +
          'g\n' +
          'dfg\n' +
          'df\n' +
          'gdfgdfgdf\n' +
          'gdf\n' +
          'g\n' +
          'dfg\n' +
          'df\n' +
          'gdf\n';
        break;
      case 3:
        this.panelContent = 'fkdsfksjkfljksldjfklsdjklfklsjdlkfklsjd';
        break;
      case 4:
        this.panelContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, minima qui. Aperiam atque culpa est excepturi laboriosam minus omnis perspiciatis provident quos ullam. Beatae hic magnam necessitatibus! \n' +
          'Ab accusamus ea et fugit itaque possimus quae quo soluta ut velit! Beatae blanditiis cumque expedita officia praesentium quia voluptas. Asperiores assumenda consectetur dolore, eaque esse impedit \n' +
          'natus perspiciatis placeat sapiente totam. Autem ducimus eaque et ex expedita facilis iure modi qui suscipit tempora, veniam voluptate! Aut autem beatae culpa cum cumque debitis, delectus dolor \n' +
          'dolore ea eius est eum, fugiat hic id illo illum impedit ipsa iste libero nam nemo praesentium reprehenderit saepe sapiente similique tenetur veritatis voluptatibus! Aliquid aspernatur dolores \n' +
          'ea earum esse maiores odit optio perferendis quasi qui. Ab aliquid asperiores corporis cumque dolores earum id in, libero maiores, non porro quae quod ratione sit tempore tenetur ullam unde? \n' +
          'Ab, cumque fugiat fugit inventore iusto labore maiores mollitia natus quia. Ab architecto autem consectetur cupiditate debitis deleniti deserunt ex id inventore laboriosam, maxime odio perspiciatis,\n' +
          'qui quia voluptas. Accusamus asperiores commodi debitis molestiae molestias necessitatibus porro repudiandae similique? Aliquid corporis cumque debitis ducimus excepturi explicabo fuga fugiat, modi,\n' +
          'nemo nisi quis quos unde, voluptatum. Accusamus aperiam hic in molestiae, nesciunt nostrum optio pariatur saepe suscipit totam? Beatae commodi consectetur corporis cum cumque dignissimos dolorum \n' +
          'eaque eius expedita facere illum in iusto laudantium libero, magnam minus nemo nulla numquam officiis omnis perferendis placeat possimus provident quia quis repudiandae similique sunt suscipit \n' +
          'tempora totam? Cupiditate et eveniet excepturi mollitia quis quisquam rerum sequi unde! Architecto aspernatur at aut culpa eius eos est, minus, nisi numquam odio quas quibusdam, quis recusandae \n' +
          'reprehenderit sunt tenetur veniam voluptates voluptatum. A accusamus, enim eveniet fugiat in ipsum minus nostrum sunt vel? Ab ad alias amet architecto aut beatae consequuntur, cum cumque delectus \n' +
          'deserunt dolore doloribus dolorum eaque error eum, expedita fugiat id ipsum iusto magnam minus natus nisi nostrum omnis pariatur perferendis quasi quo ratione rem repellendus sapiente\n' +
          'similique suscipit tenetur ut veritatis, voluptates voluptatibus. Laborum, magnam possimus. Accusamus ex ipsum molestias placeat quidem? Corporis et fugit magni perspiciatis sit vel voluptatum? \n' +
          'Asperiores corporis doloremque doloribus minus nemo nisi odit optio quia repellat! Asperiores deserunt eligendi error molestias quaerat? A accusamus accusantium ad aliquam consequatur consequuntur \n' +
          'cum delectus dolor doloribus eligendi esse est excepturi fuga, id in ipsam iure laborum modi molestias mollitia nam nihil obcaecati odio odit omnis optio quasi qui recusandae reprehenderit se\n' +
          'd sequi soluta sunt tempora totam, ullam vero voluptatum? Beatae dolor ducimus est ex ipsa neque quas temporibus voluptate voluptatibus voluptatum! Modi optio quasi quis ut. Dolore, dolorum ill\n' +
          'o ipsa libero maxime minus molestiae obcaecati officia repellat. Eius ipsa possimus quo sequi. A cupiditate dolores est expedita, harum ipsa laborum nemo non pariatur placeat quis quisquam ut v\n' +
          'oluptate voluptatem voluptates! Accusantium architecto autem cumque deserunt dignissimos dolor dolore enim expedita fugiat hic impedit ipsa ipsum laboriosam odio, odit officiis optio perferendis q\n' +
          'uae quaerat qui, quis recusandae repudiandae soluta tenetur ut vel, veniam vero. Ad atque commodi consectetur deleniti est molestiae soluta vel!Lorem ipsum dolor sit amet, consectetur adipisicing \n' +
          'elit. Illo, minima qui. Aperiam atque culpa est excepturi laboriosam minus omnis perspiciatis provident quos ullam. Beatae hic magnam necessitatibus! \n' +
          'Ab accusamus ea et fugit itaque possimus quae quo soluta ut velit! Beatae blanditiis cumque expedita officia praesentium quia voluptas. Asperiores assumenda consectetur dolore, eaque esse impedit \n' +
          'natus perspiciatis placeat sapiente totam. Autem ducimus eaque et ex expedita facilis iure modi qui suscipit tempora, veniam voluptate! Aut autem beatae culpa cum cumque debitis, delectus dolor \n' +
          'dolore ea eius est eum, fugiat hic id illo illum impedit ipsa iste libero nam nemo praesentium reprehenderit saepe sapiente similique tenetur veritatis voluptatibus! Aliquid aspernatur dolores \n' +
          'ea earum esse maiores odit optio perferendis quasi qui. Ab aliquid asperiores corporis cumque dolores earum id in, libero maiores, non porro quae quod ratione sit tempore tenetur ullam unde? \n' +
          'Ab, cumque fugiat fugit inventore iusto labore maiores mollitia natus quia. Ab architecto autem consectetur cupiditate debitis deleniti deserunt ex id inventore laboriosam, maxime odio perspiciatis,\n' +
          'qui quia voluptas. Accusamus asperiores commodi debitis molestiae molestias necessitatibus porro repudiandae similique? Aliquid corporis cumque debitis ducimus excepturi explicabo fuga fugiat, modi,\n' +
          'nemo nisi quis quos unde, voluptatum. Accusamus aperiam hic in molestiae, nesciunt nostrum optio pariatur saepe suscipit totam? Beatae commodi consectetur corporis cum cumque dignissimos dolorum \n' +
          'eaque eius expedita facere illum in iusto laudantium libero, magnam minus nemo nulla numquam officiis omnis perferendis placeat possimus provident quia quis repudiandae similique sunt suscipit \n' +
          'tempora totam? Cupiditate et eveniet excepturi mollitia quis quisquam rerum sequi unde! Architecto aspernatur at aut culpa eius eos est, minus, nisi numquam odio quas quibusdam, quis recusandae \n' +
          'reprehenderit sunt tenetur veniam voluptates voluptatum. A accusamus, enim eveniet fugiat in ipsum minus nostrum sunt vel? Ab ad alias amet architecto aut beatae consequuntur, cum cumque delectus \n' +
          'deserunt dolore doloribus dolorum eaque error eum, expedita fugiat id ipsum iusto magnam minus natus nisi nostrum omnis pariatur perferendis quasi quo ratione rem repellendus sapiente\n' +
          'similique suscipit tenetur ut veritatis, voluptates voluptatibus. Laborum, magnam possimus. Accusamus ex ipsum molestias placeat quidem? Corporis et fugit magni perspiciatis sit vel voluptatum? \n' +
          'Asperiores corporis doloremque doloribus minus nemo nisi odit optio quia repellat! Asperiores deserunt eligendi error molestias quaerat? A accusamus accusantium ad aliquam consequatur consequuntur \n' +
          'cum delectus dolor doloribus eligendi esse est excepturi fuga, id in ipsam iure laborum modi molestias mollitia nam nihil obcaecati odio odit omnis optio quasi qui recusandae reprehenderit se\n' +
          'd sequi soluta sunt tempora totam, ullam vero voluptatum? Beatae dolor ducimus est ex ipsa neque quas temporibus voluptate voluptatibus voluptatum! Modi optio quasi quis ut. Dolore, dolorum ill\n' +
          'o ipsa libero maxime minus molestiae obcaecati officia repellat. Eius ipsa possimus quo sequi. A cupiditate dolores est expedita, harum ipsa laborum nemo non pariatur placeat quis quisquam ut v\n' +
          'oluptate voluptatem voluptates! Accusantium architecto autem cumque deserunt dignissimos dolor dolore enim expedita fugiat hic impedit ipsa ipsum laboriosam odio, odit officiis optio perferendis q\n' +
          'uae quaerat qui, quis recusandae repudiandae soluta tenetur ut vel, veniam vero. Ad atque commodi consectetur deleniti est molestiae soluta vel!Lorem ipsum dolor sit amet, consectetur adipisicing \n' +
          'elit. Illo, minima qui. Aperiam atque culpa est excepturi laboriosam minus omnis perspiciatis provident quos ullam. Beatae hic magnam necessitatibus! \n' +
          'Ab accusamus ea et fugit itaque possimus quae quo soluta ut velit! Beatae blanditiis cumque expedita officia praesentium quia voluptas. Asperiores assumenda consectetur dolore, eaque esse impedit \n' +
          'natus perspiciatis placeat sapiente totam. Autem ducimus eaque et ex expedita facilis iure modi qui suscipit tempora, veniam voluptate! Aut autem beatae culpa cum cumque debitis, delectus dolor \n' +
          'dolore ea eius est eum, fugiat hic id illo illum impedit ipsa iste libero nam nemo praesentium reprehenderit saepe sapiente similique tenetur veritatis voluptatibus! Aliquid aspernatur dolores \n' +
          'ea earum esse maiores odit optio perferendis quasi qui. Ab aliquid asperiores corporis cumque dolores earum id in, libero maiores, non porro quae quod ratione sit tempore tenetur ullam unde? \n' +
          'Ab, cumque fugiat fugit inventore iusto labore maiores mollitia natus quia. Ab architecto autem consectetur cupiditate debitis deleniti deserunt ex id inventore laboriosam, maxime odio perspiciatis,\n' +
          'qui quia voluptas. Accusamus asperiores commodi debitis molestiae molestias necessitatibus porro repudiandae similique? Aliquid corporis cumque debitis ducimus excepturi explicabo fuga fugiat, modi,\n' +
          'nemo nisi quis quos unde, voluptatum. Accusamus aperiam hic in molestiae, nesciunt nostrum optio pariatur saepe suscipit totam? Beatae commodi consectetur corporis cum cumque dignissimos dolorum \n' +
          'eaque eius expedita facere illum in iusto laudantium libero, magnam minus nemo nulla numquam officiis omnis perferendis placeat possimus provident quia quis repudiandae similique sunt suscipit \n' +
          'tempora totam? Cupiditate et eveniet excepturi mollitia quis quisquam rerum sequi unde! Architecto aspernatur at aut culpa eius eos est, minus, nisi numquam odio quas quibusdam, quis recusandae \n' +
          'reprehenderit sunt tenetur veniam voluptates voluptatum. A accusamus, enim eveniet fugiat in ipsum minus nostrum sunt vel? Ab ad alias amet architecto aut beatae consequuntur, cum cumque delectus \n' +
          'deserunt dolore doloribus dolorum eaque error eum, expedita fugiat id ipsum iusto magnam minus natus nisi nostrum omnis pariatur perferendis quasi quo ratione rem repellendus sapiente\n' +
          'similique suscipit tenetur ut veritatis, voluptates voluptatibus. Laborum, magnam possimus. Accusamus ex ipsum molestias placeat quidem? Corporis et fugit magni perspiciatis sit vel voluptatum? \n' +
          'Asperiores corporis doloremque doloribus minus nemo nisi odit optio quia repellat! Asperiores deserunt eligendi error molestias quaerat? A accusamus accusantium ad aliquam consequatur consequuntur \n' +
          'cum delectus dolor doloribus eligendi esse est excepturi fuga, id in ipsam iure laborum modi molestias mollitia nam nihil obcaecati odio odit omnis optio quasi qui recusandae reprehenderit se\n' +
          'd sequi soluta sunt tempora totam, ullam vero voluptatum? Beatae dolor ducimus est ex ipsa neque quas temporibus voluptate voluptatibus voluptatum! Modi optio quasi quis ut. Dolore, dolorum ill\n' +
          'o ipsa libero maxime minus molestiae obcaecati officia repellat. Eius ipsa possimus quo sequi. A cupiditate dolores est expedita, harum ipsa laborum nemo non pariatur placeat quis quisquam ut v\n' +
          'oluptate voluptatem voluptates! Accusantium architecto autem cumque deserunt dignissimos dolor dolore enim expedita fugiat hic impedit ipsa ipsum laboriosam odio, odit officiis optio perferendis q\n' +
          'uae quaerat qui, quis recusandae repudiandae soluta tenetur ut vel, veniam vero. Ad atque commodi consectetur deleniti est molestiae soluta vel!Lorem ipsum dolor sit amet, consectetur adipisicing \n' +
          'elit. Illo, minima qui. Aperiam atque culpa est excepturi laboriosam minus omnis perspiciatis provident quos ullam. Beatae hic magnam necessitatibus! \n' +
          'Ab accusamus ea et fugit itaque possimus quae quo soluta ut velit! Beatae blanditiis cumque expedita officia praesentium quia voluptas. Asperiores assumenda consectetur dolore, eaque esse impedit \n' +
          'natus perspiciatis placeat sapiente totam. Autem ducimus eaque et ex expedita facilis iure modi qui suscipit tempora, veniam voluptate! Aut autem beatae culpa cum cumque debitis, delectus dolor \n' +
          'dolore ea eius est eum, fugiat hic id illo illum impedit ipsa iste libero nam nemo praesentium reprehenderit saepe sapiente similique tenetur veritatis voluptatibus! Aliquid aspernatur dolores \n' +
          'ea earum esse maiores odit optio perferendis quasi qui. Ab aliquid asperiores corporis cumque dolores earum id in, libero maiores, non porro quae quod ratione sit tempore tenetur ullam unde? \n' +
          'Ab, cumque fugiat fugit inventore iusto labore maiores mollitia natus quia. Ab architecto autem consectetur cupiditate debitis deleniti deserunt ex id inventore laboriosam, maxime odio perspiciatis,\n' +
          'qui quia voluptas. Accusamus asperiores commodi debitis molestiae molestias necessitatibus porro repudiandae similique? Aliquid corporis cumque debitis ducimus excepturi explicabo fuga fugiat, modi,\n' +
          'nemo nisi quis quos unde, voluptatum. Accusamus aperiam hic in molestiae, nesciunt nostrum optio pariatur saepe suscipit totam? Beatae commodi consectetur corporis cum cumque dignissimos dolorum \n' +
          'eaque eius expedita facere illum in iusto laudantium libero, magnam minus nemo nulla numquam officiis omnis perferendis placeat possimus provident quia quis repudiandae similique sunt suscipit \n' +
          'tempora totam? Cupiditate et eveniet excepturi mollitia quis quisquam rerum sequi unde! Architecto aspernatur at aut culpa eius eos est, minus, nisi numquam odio quas quibusdam, quis recusandae \n' +
          'reprehenderit sunt tenetur veniam voluptates voluptatum. A accusamus, enim eveniet fugiat in ipsum minus nostrum sunt vel? Ab ad alias amet architecto aut beatae consequuntur, cum cumque delectus \n' +
          'deserunt dolore doloribus dolorum eaque error eum, expedita fugiat id ipsum iusto magnam minus natus nisi nostrum omnis pariatur perferendis quasi quo ratione rem repellendus sapiente\n' +
          'similique suscipit tenetur ut veritatis, voluptates voluptatibus. Laborum, magnam possimus. Accusamus ex ipsum molestias placeat quidem? Corporis et fugit magni perspiciatis sit vel voluptatum? \n' +
          'Asperiores corporis doloremque doloribus minus nemo nisi odit optio quia repellat! Asperiores deserunt eligendi error molestias quaerat? A accusamus accusantium ad aliquam consequatur consequuntur \n' +
          'cum delectus dolor doloribus eligendi esse est excepturi fuga, id in ipsam iure laborum modi molestias mollitia nam nihil obcaecati odio odit omnis optio quasi qui recusandae reprehenderit se\n' +
          'd sequi soluta sunt tempora totam, ullam vero voluptatum? Beatae dolor ducimus est ex ipsa neque quas temporibus voluptate voluptatibus voluptatum! Modi optio quasi quis ut. Dolore, dolorum ill\n' +
          'o ipsa libero maxime minus molestiae obcaecati officia repellat. Eius ipsa possimus quo sequi. A cupiditate dolores est expedita, harum ipsa laborum nemo non pariatur placeat quis quisquam ut v\n' +
          'oluptate voluptatem voluptates! Accusantium architecto autem cumque deserunt dignissimos dolor dolore enim expedita fugiat hic impedit ipsa ipsum laboriosam odio, odit officiis optio perferendis q\n' +
          'uae quaerat qui, quis recusandae repudiandae soluta tenetur ut vel, veniam vero. Ad atque commodi consectetur deleniti est molestiae soluta vel!Lorem ipsum dolor sit amet, consectetur adipisicing \n' +
          'elit. Illo, minima qui. Aperiam atque culpa est excepturi laboriosam minus omnis perspiciatis provident quos ullam. Beatae hic magnam necessitatibus! \n' +
          'Ab accusamus ea et fugit itaque possimus quae quo soluta ut velit! Beatae blanditiis cumque expedita officia praesentium quia voluptas. Asperiores assumenda consectetur dolore, eaque esse impedit \n' +
          'natus perspiciatis placeat sapiente totam. Autem ducimus eaque et ex expedita facilis iure modi qui suscipit tempora, veniam voluptate! Aut autem beatae culpa cum cumque debitis, delectus dolor \n' +
          'dolore ea eius est eum, fugiat hic id illo illum impedit ipsa iste libero nam nemo praesentium reprehenderit saepe sapiente similique tenetur veritatis voluptatibus! Aliquid aspernatur dolores \n' +
          'ea earum esse maiores odit optio perferendis quasi qui. Ab aliquid asperiores corporis cumque dolores earum id in, libero maiores, non porro quae quod ratione sit tempore tenetur ullam unde? \n' +
          'Ab, cumque fugiat fugit inventore iusto labore maiores mollitia natus quia. Ab architecto autem consectetur cupiditate debitis deleniti deserunt ex id inventore laboriosam, maxime odio perspiciatis,\n' +
          'qui quia voluptas. Accusamus asperiores commodi debitis molestiae molestias necessitatibus porro repudiandae similique? Aliquid corporis cumque debitis ducimus excepturi explicabo fuga fugiat, modi,\n' +
          'nemo nisi quis quos unde, voluptatum. Accusamus aperiam hic in molestiae, nesciunt nostrum optio pariatur saepe suscipit totam? Beatae commodi consectetur corporis cum cumque dignissimos dolorum \n' +
          'eaque eius expedita facere illum in iusto laudantium libero, magnam minus nemo nulla numquam officiis omnis perferendis placeat possimus provident quia quis repudiandae similique sunt suscipit \n' +
          'tempora totam? Cupiditate et eveniet excepturi mollitia quis quisquam rerum sequi unde! Architecto aspernatur at aut culpa eius eos est, minus, nisi numquam odio quas quibusdam, quis recusandae \n' +
          'reprehenderit sunt tenetur veniam voluptates voluptatum. A accusamus, enim eveniet fugiat in ipsum minus nostrum sunt vel? Ab ad alias amet architecto aut beatae consequuntur, cum cumque delectus \n' +
          'deserunt dolore doloribus dolorum eaque error eum, expedita fugiat id ipsum iusto magnam minus natus nisi nostrum omnis pariatur perferendis quasi quo ratione rem repellendus sapiente\n' +
          'similique suscipit tenetur ut veritatis, voluptates voluptatibus. Laborum, magnam possimus. Accusamus ex ipsum molestias placeat quidem? Corporis et fugit magni perspiciatis sit vel voluptatum? \n' +
          'Asperiores corporis doloremque doloribus minus nemo nisi odit optio quia repellat! Asperiores deserunt eligendi error molestias quaerat? A accusamus accusantium ad aliquam consequatur consequuntur \n' +
          'cum delectus dolor doloribus eligendi esse est excepturi fuga, id in ipsam iure laborum modi molestias mollitia nam nihil obcaecati odio odit omnis optio quasi qui recusandae reprehenderit se\n' +
          'd sequi soluta sunt tempora totam, ullam vero voluptatum? Beatae dolor ducimus est ex ipsa neque quas temporibus voluptate voluptatibus voluptatum! Modi optio quasi quis ut. Dolore, dolorum ill\n' +
          'o ipsa libero maxime minus molestiae obcaecati officia repellat. Eius ipsa possimus quo sequi. A cupiditate dolores est expedita, harum ipsa laborum nemo non pariatur placeat quis quisquam ut v\n' +
          'oluptate voluptatem voluptates! Accusantium architecto autem cumque deserunt dignissimos dolor dolore enim expedita fugiat hic impedit ipsa ipsum laboriosam odio, odit officiis optio perferendis q\n' +
          'uae quaerat qui, quis recusandae repudiandae soluta tenetur ut vel, veniam vero. Ad atque commodi consectetur deleniti est molestiae soluta vel!';
        break;
      case 5:
        this.panelContent = 'jjfshjsd';
        break;
    }


    op.toggle(event);
  }
}
