// Initial state of component
export interface RootState {
    form: FormState; 
    app: AppState; 
  }
  
  export interface AppProps {}
  
  // App state types
  export type AppState = {
    error: string; 
    loading: boolean; 
    user: string; 
    loggedIn: boolean;  
    data: ClassesProps['data']; 
  };
  
  export interface FormProps {
    onSubmit(value: string): void; 
    error: string; 
  }
  
  export interface FormState {
    value: string; 
  }
  
  // Class data types
  export interface ClassData {
    Name: string; 
    Students: string[]; 
  }
  
  export interface ClassesProps {
    data: {
      [key: string]: ClassRecord; 
    };
    handleLogout(): void; 
  }
  