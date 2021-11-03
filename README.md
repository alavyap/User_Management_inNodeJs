# Library_Management_inPython


All the files having .ui extensions are made using PyQt5 Designer 
Where PyQt5 is a build in  plug-in for Python


"""
PyQt is a Python binding of the cross-platform GUI toolkit Qt,
implemented as a Python plug-in.

"""



Files like book.py, app.py and my_function.py
                                               are for the backend logic of the project.
      
You any only used this 3 for the library management by simply running """ python app.py """ in your terminal but it will be without any "interface"
But if you combine  project.py and my_functions.py with rest of the remaining files you will have a better project.

To convert all the .ui file you need to run the code in your terminal that is 
                                                                                """ pyuic5 delete_dialog.ui -o delete_dialog.py"""
                                                                                """pyuic5 edit_dialog.ui -o edit_dialog.py"""
                                                                                """pyuic5 add_book_dialog.ui -o add_book_dialog.py"""
                                                                                """pyuic5 main_window.ui -o main_window.py"""
  
  
To designe you own gui go to your terminal type """ designer"""


