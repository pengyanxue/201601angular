/**
 * Created by Administrator on 2016/6/16.
 */
function one(){
    var first='first';
    function two(){
        var second='first';
    }
    two();
}
one();
/**
 * 1 ��������ʱ���Ⱥ�����һ��ȫ�������Ļ���  window
 *    this=window
 *      ȫ������  Math Reg Array
 *      ���������ĺ������� var ����
 * 2 ������һ��������ʱ������һ����������ִ�������Ļ���
 *   this
 *   ֵ����/�������  ���� var�������� function����
 *    ����
 * */