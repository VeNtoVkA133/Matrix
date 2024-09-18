using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WinFormsApp1
{
    internal class functions
    {
        public void checkNumber(int num, Label txt)
        {
            if (num < 0 || num > 0 || num == 0)
            {
                txt.Visible = false;
                
            }
            else
            {
                txt.Text = "Ошибочное значение!! ( " + num + " ) Напишите только число";
                txt.Visible = true;
            }
        }
    }
}
