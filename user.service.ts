import{ EventEmitter} from '@angular/core'
export class UserService{
    users=[
        {
            id: '00000000-0000-0000-0000-000000000001',
            name: 'jsmith',
            actualName: 'Jane Smith',
            displayName: 'Jane Smith (jsmith)'
          },
          {
            id: '00000000-0000-0000-0000-000000000002',
        name: 'admin',
            actualName: 'null',
            displayName: 'admin'
          },
          {
            id: '00000000-0000-0000-0000-000000000003',
            name: 'releaser',
            actualName: 'null',
            displayName: 'releaser'
          },
          {
            id: '00000000-0000-0000-0000-000000000004',
            name: 'user',
            actualName: 'null',
            displayName: 'user'
          }
    ]
    onShowClicked=new EventEmitter<{
        id: string,
        name: string,
        actualName: string,
        displayName: string
      }>();
      ShowUserDetails(user:{
        id: string,
        name: string,
        actualName: string,
        displayName: string
     

    }){
     this.onShowClicked.emit(user)
    }
  
      
}